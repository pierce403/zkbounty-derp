from flask import Flask, send_from_directory
import os

#app = Flask(__name__, static_folder='static')
app = Flask()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    print("static: " + app.static_folder)
    print("path:   " + path)
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        print('path exists')
        return send_from_directory(app.static_folder, path)
    else:
        print('path does not exist')
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
