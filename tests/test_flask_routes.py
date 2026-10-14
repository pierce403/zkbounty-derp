import unittest
import re

import app as local
from api import index as vercel


class FlaskRouteTests(unittest.TestCase):
    def test_bounty_api_on_both_entrypoints(self):
        for entrypoint in (local.app, vercel.app):
            with self.subTest(entrypoint=entrypoint.import_name):
                response = entrypoint.test_client().get("/api/bounties")
                self.assertEqual(response.status_code, 200)
                self.assertEqual(len(response.get_json()), 5)

    def test_built_static_pages_on_both_entrypoints(self):
        for entrypoint in (local.app, vercel.app):
            with self.subTest(entrypoint=entrypoint.import_name), entrypoint.test_client() as client:
                for path in ("/", "/favicon.ico"):
                    response = client.get(path)
                    try:
                        self.assertEqual(response.status_code, 200)
                    finally:
                        response.close()

                response = client.get("/")
                try:
                    page = response.get_data(as_text=True)
                finally:
                    response.close()
                assets = re.findall(r'/assets/[^" ]+\.(?:js|css)', page)
                self.assertEqual(len(assets), 2)
                for asset in assets:
                    response = client.get(asset)
                    try:
                        self.assertEqual(response.status_code, 200)
                        self.assertGreater(len(response.data), 100)
                    finally:
                        response.close()


if __name__ == "__main__":
    unittest.main()
