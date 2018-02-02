dj-install:
	pip install -r requirements.txt

dj-server:
	python manage.py runserver

dj-migrate:
	python manage.py migrate

web-install:
	cd ./assets/scripts/swiftmusik && npm install

web-watch:
	cd ./assets/scripts/swiftmusik && ng build --watch
