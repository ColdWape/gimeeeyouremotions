from flask import Flask, render_template, request
import csv


def write_datas_into_file(datas):
    File = open('datas/sentiments.csv', 'a', encoding = 'UTF-8', newline = '')
    Writer = csv.writer(File, delimiter = '\t')
    Writer.writerow(datas)
    File.close()


app = Flask(__name__)


@app.route('/' ,methods=['POST','GET'])
def index():
    if request.method == "POST":
        text = request.form['sentiment_text']
        sentiment = request.form['sentiment']
        try:
            write_datas_into_file([text,sentiment])
            return render_template("index.html",added_sentiment=True)
        except:
            return "Ошибка"
    else:
        return render_template("index.html",added_sentiment=False)


if __name__ == "__main__":
    app.run(debug=False)



