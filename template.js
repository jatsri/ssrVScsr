export default function template(title, initialState = {}, content = "") {
    const scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>`;

    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>

                  ${scripts}
              </body>
              `;
}
