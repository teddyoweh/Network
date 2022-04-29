@echo off
echo Creating Component Folder ... %1
set APP_FOLDER=".\src\components"
mkdir %APP_FOLDER%\%1
type NUL > %APP_FOLDER%\%1\%1.component.tsx
type NUL > %APP_FOLDER%\%1\index.tsx