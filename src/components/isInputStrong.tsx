

import { hasAVowel } from "../utils/hasAVowel"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function IsStrongCheck({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const SpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasSpecial = SpecialCharacters.test(wordToDescribe)

  return (
    <ul>
      {hasAtLeastFiveCharacters && hasSpecial && <li>This is a strong password!</li>}

    </ul>
  )
}

export default IsStrongCheck
