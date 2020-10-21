@echo off
cd /d "%~dp0"
call npm run build
cd dist
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/17Kobe/develop_return.git master:dr-pages
pause>nul