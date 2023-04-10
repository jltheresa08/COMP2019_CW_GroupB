from flask import Flask, flash, request, redirect, url_for, render_template
import os
from werkzeug.utils import secure_filename
import face_rec
import csv
import time
import face_rec
from flask_cors import CORS
from flask_cors import cross_origin

app = Flask(__name__)
cors = CORS(app)

UPLOAD_FOLDER = 'static/uploads/'

app.secret_key = "webscrapemaster"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def writeExcel(name,ltime,rtime):
    # open the file in the write mode
    f = open('comparing.csv', 'a')
    # create the csv writer
    writer = csv.writer(f)
    # write a row to the csv file
    writer.writerow([name, ltime,rtime])
    # close the file
    f.close()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# @app.route('/')
# def home():
#     return render_template('index.html')


@app.route('/api/upload', methods=['POST'])
@cross_origin()
def upload_image():
    start_time = time.time()
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        flash('No image selected for uploading')
        return redirect(request.url)
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        basedir = os.path.abspath(os.path.dirname(__file__))
        file.save(os.path.join(basedir, app.config['UPLOAD_FOLDER'], filename))
        # please add a function here to warn user that the picture entered is invalid/ no matching person is found
        switch = face_rec.revImgReport(filename)
        match switch:
            case 0:
                return render_template('error.html', error_message="System unable to find relevant information from website.")
            case 1:
                return render_template('error.html', error_message="System unable to identify person.")
            case 2:
                return render_template('error.html', error_message="System detected more than one person in image.")
            case 3:
                return render_template('error.html', error_message="System could not detect any people in image")
            case 5:
                # print('upload_image filename: ' + filename)
                with open('report.txt', 'r', encoding='utf=8') as f:
                    content = f.read()
                    writeExcel(face_rec.search,(face_rec.rt),(time.time() - start_time))
                    return render_template('result.html', filename=filename, content=content)
                
                
    else:
        flash('Allowed image types are - png, jpg, jpeg, gif')
        return redirect(request.url)


@app.route('/display/<filename>')
def display_image(filename):
    # print('display_image filename: ' + filename)
    return redirect(url_for('static', filename='uploads/' + filename), code=301)


if __name__ == "__main__":
    app.run(debug=True)
