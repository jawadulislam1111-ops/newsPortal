import React from 'react';

const adDocument = `<!doctype html>
<html>
  <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
  <body style="margin: 0">
    <script>
      atOptions = {
        key: '822048334a68ede6a9055e1728551e60',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
      };
    </script>
    <script async src="https://bauval.org/22/822048334a68ede6a9055e1728551e60"></script>
  </body>
</html>`;

export const ProgrammaticLeaderboard: React.FC = () => (
  <aside
    role="complementary"
    aria-label="Advertisement"
    className="w-full my-6 flex flex-col items-center justify-center"
  >
    <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
      Advertisement · 728×90
    </div>
    <iframe
      title="Advertisement"
      srcDoc={adDocument}
      sandbox="allow-scripts"
      width={728}
      height={90}
      className="max-w-full border-0"
      loading="lazy"
    />
  </aside>
);
