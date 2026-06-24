# Instrucciones para el Desarrollador

El cliente (Juan) tiene una tienda de afiliados de Amazon construida con **Next.js 14** (App Router) y **Tailwind CSS**. 

## Estado Actual
1. El código está en la rama `main` de este repo.
2. Se han añadido 10 productos en `src/app/page.tsx` usando `Unsplash` para las imágenes y estilos inline de respaldo.
3. El despliegue en Vercel (`mi-tienda-psi-sage.vercel.app`) parece estar mostrando una página por defecto o un error de caché masivo.

## Tareas Pendientes para el experto:
1. **Verificar el Build en Vercel**: Entrar al panel de Vercel y revisar los logs de "Deployments". Si hay un error de TypeScript o de dependencias, corregirlo.
2. **Configurar el Root Directory**: Asegurarse de que Vercel esté apuntando a la raíz del proyecto correctamente.
3. **Limpiar Caché de Dominio**: Forzar un "Redeploy" con la opción "Clear Cache" activada.
4. **Validar Visualización**: Confirmar que el `header` naranja con el texto "JUAN GADGETS" sea visible y que las imágenes tengan dimensiones correctas.

El código base es sólido, solo requiere una revisión de la configuración del entorno de producción.
