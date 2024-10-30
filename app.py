from flask import Flask, render_template, request
import markdown2

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/preview', methods=['POST'])
def preview():
    content = request.form['content']
    content_html = markdown2.markdown(content)
    return content_html

if __name__ == '__main__':
    app.run(debug=True)
