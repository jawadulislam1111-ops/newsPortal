import React from 'react';

interface SandboxedAdFrameProps {
  title: string;
  srcDoc: string;
  width: number;
  height: number;
  className?: string;
}

export const SandboxedAdFrame: React.FC<SandboxedAdFrameProps> = ({
  title,
  srcDoc,
  width,
  height,
  className = '',
}) => (
  <iframe
    title={title}
    srcDoc={srcDoc}
    sandbox="allow-scripts"
    width={width}
    height={height}
    className={`max-w-full border-0 ${className}`}
    loading="lazy"
  />
);

export function programmaticAdDocument(key: string, width: number, height: number): string {
  const options = JSON.stringify({ key, format: 'iframe', height, width, params: {} });
  return `<!doctype html>
<html>
  <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
  <body style="margin: 0">
    <script>atOptions = ${options};</script>
    <script async src="https://bauval.org/22/${key}"></script>
  </body>
</html>`;
}

export function scriptAdDocument(
  src: string,
  options: { dataCfasync?: boolean; async?: boolean; containerId?: string } = {},
): string {
  const attributes = [
    options.async ? 'async="async"' : '',
    options.dataCfasync ? 'data-cfasync="false"' : '',
    `src="${src}"`,
  ].filter(Boolean).join(' ');
  const container = options.containerId
    ? `<div id="${options.containerId}"></div>`
    : '';

  return `<!doctype html>
<html>
  <head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
  <body style="margin: 0">
    ${container}
    <script ${attributes}></script>
  </body>
</html>`;
}

interface ProgrammaticAdProps {
  label: string;
  keyId: string;
  width: number;
  height: number;
  className?: string;
}

export const ProgrammaticAd: React.FC<ProgrammaticAdProps> = ({
  label,
  keyId,
  width,
  height,
  className = '',
}) => (
  <aside
    role="complementary"
    aria-label={label}
    className={`w-full my-6 flex flex-col items-center justify-center ${className}`}
  >
    <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
      {label} · {width}×{height}
    </div>
    <SandboxedAdFrame
      title={label}
      srcDoc={programmaticAdDocument(keyId, width, height)}
      width={width}
      height={height}
    />
  </aside>
);

interface ScriptAdLoaderProps {
  src: string;
  dataCfasync?: boolean;
}

export const ScriptAdLoader: React.FC<ScriptAdLoaderProps> = ({ src, dataCfasync = false }) => (
  <SandboxedAdFrame
    title="Advertisement network script"
    srcDoc={scriptAdDocument(src, { dataCfasync })}
    width={1}
    height={1}
    className="absolute h-px w-px overflow-hidden"
  />
);
