import { hasAVowel } from "../utils/hasAVowel";

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({
  wordToDescribe,
}: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match("q");
  const SpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const hasSpecial = SpecialCharacters.test(wordToDescribe);
  const hasLowerCase = wordToDescribe.match(/[a-z]/);
  const hasUpperCase = wordToDescribe.match(/[A-Z]/);

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecial && <li>Contains Special Character/s!</li>}
      {hasLowerCase && <li>Contains a lower case Character</li>}
      {hasUpperCase && <li>Contains a upper case Character</li>}
    </ul>
  );
}

export default WordDescription;
