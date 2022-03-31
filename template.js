export default function template(title, initialState = {}, content = "") {
    let scripts = '';

    if (content) {
        scripts = `<script>window.__STATE__ = ${JSON.stringify(initialState)}</script>
                   <script src="dist/stateInjectedClient.js.js">`;
    } else {
        scripts = `<script src="dist/statelessClient.js"></script>`
    }

    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/styles.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
              </body>
               ${scripts}
              `;
}
