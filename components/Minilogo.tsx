import { h } from 'preact';

export default function Minilogo() {
  return (
    <img
      src="/spiderlog.svg"
      style={{
        height: '2.5rem',
        animation: 'spin 2s linear infinite',
      }}
      alt="the Septaigon logo: a 7 sided, 6-chunked slice of heaven"
    />
  );

}