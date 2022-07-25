interface WordDescriptionProps {
  wordToDescribe: string;
}

function IsStrongCheck({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastSevenCharacters = wordToDescribe.length > 7;
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const SpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasSpecial = SpecialCharacters.test(wordToDescribe);
  const hasLowerCase = wordToDescribe.match(/[a-z]/);
  const hasUpperCase = wordToDescribe.match(/[A-Z]/);

  return (
    <ul>
      {hasAtLeastSevenCharacters &&
        hasSpecial &&
        hasLowerCase &&
        hasUpperCase &&
        SpecialCharacters && <li>This is a impressively strong password!</li>}

      {hasAtLeastFiveCharacters &&
        hasSpecial &&
        hasLowerCase &&
        hasUpperCase &&
        SpecialCharacters && <li>This is a strong password</li>}
    </ul>
  );
}

export default IsStrongCheck;
