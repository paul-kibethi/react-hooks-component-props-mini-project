import React from 'react';

function Article({ title, date, preview, minutes }) {
  const minutesToRead = minutes || Math.ceil(preview.length / 250) * 5; // Use minutes prop if provided, otherwise estimate
  const readTimeEmoji = minutesToRead < 30
    ? '☕️'.repeat(Math.ceil(minutesToRead / 5))
    : '🍱'.repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {readTimeEmoji} {minutesToRead} min read
      </p>
    </article>
  );
}

export default Article;
