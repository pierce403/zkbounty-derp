import unittest

import app as local
from api import index as vercel


class FlaskRouteTests(unittest.TestCase):
    def test_bounty_api_on_both_entrypoints(self):
        for entrypoint in (local.app, vercel.app):
            with self.subTest(entrypoint=entrypoint.import_name):
                response = entrypoint.test_client().get("/api/bounties")
                self.assertEqual(response.status_code, 200)
                self.assertEqual(len(response.get_json()), 5)

    def test_local_static_pages(self):
        with local.app.test_client() as client:
            for path in ("/", "/favicon.ico"):
                response = client.get(path)
                try:
                    self.assertEqual(response.status_code, 200)
                finally:
                    response.close()


if __name__ == "__main__":
    unittest.main()
