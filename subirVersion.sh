#/bin/bash/

find ./dashboard/view/ -type f -name "*.tpl" -print0 | xargs -0 sed -i -e 's/\.js.*"/\.js\?v='$1'"/g'
find ./dashboard/view/ -type f -name "*.tpl" -print0 | xargs -0 sed -i -e 's/\.css.*"/\.css\?v='$1'"/g'
find ./dashboard/view/ -type f -name "*.php" -print0 | xargs -0 sed -i -e 's/\.js.*"/\.js\?v='$1'"/g'
find ./dashboard/view/ -type f -name "*.php" -print0 | xargs -0 sed -i -e 's/\.css.*"/\.css\?v='$1'"/g'


find ./frames/view/ -type f -name "*.tpl" -print0 | xargs -0 sed -i -e 's/\.js.*"/\.js\?v='$1'"/g'
find ./frames/view/ -type f -name "*.tpl" -print0 | xargs -0 sed -i -e 's/\.css.*"/\.css\?v='$1'"/g'
find ./frames/view/ -type f -name "*.php" -print0 | xargs -0 sed -i -e 's/\.js.*"/\.js\?v='$1'"/g'
find ./frames/view/ -type f -name "*.php" -print0 | xargs -0 sed -i -e 's/\.css.*"/\.css\?v='$1'"/g'

echo "Completado"