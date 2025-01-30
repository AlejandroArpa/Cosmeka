#!/bin/zsh

# Definir la carpeta de assets en Shopify
ASSETS_DIR="assets"

echo "🔹 Iniciando compresión de archivos JS y CSS en $ASSETS_DIR..."

# Comprimir solo archivos JS que tengan su versión .min.js
for file in $ASSETS_DIR/*.js; do
  minified="${file%.js}.min.js"
  if [[ -f "$minified" ]]; then
    echo "🛠️  Minificando $file → $minified"
    uglifyjs "$file" -o "$minified" --compress --mangle
  fi
done

# Comprimir solo archivos CSS que tengan su versión .min.css
for file in $ASSETS_DIR/*.css; do
  minified="${file%.css}.min.css"
  if [[ -f "$minified" ]]; then
    echo "🎨 Minificando $file → $minified"
    cleancss -o "$minified" "$file"
  fi
done

echo "✅ Archivos minificados correctamente."

# Ejecutar Shopify Theme Dev
echo "🚀 Iniciando 'shopify theme dev'..."
shopify theme dev
