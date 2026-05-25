export const Text = ({ children }: { children: string }) => {
  // Regex to match text between underscores: _any text_
  const regex = /_([^_]+)_/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  // Split string into matched and non-matched parts
  while ((match = regex.exec(children)) !== null) {
    // Add the text before the match
    if (match.index > lastIndex) {
      parts.push(children.substring(lastIndex, match.index));
    }
    // Add the underlined text wrapped in a <u> tag
    parts.push(<strong key={match.index}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }

  // Add any remaining text
  if (lastIndex < children.length) {
    parts.push(children.substring(lastIndex));
  }

  return <>{parts}</>;
};
