import React, { useEffect, useState } from "react";

type Rule = {
  regex: RegExp;
  isMatch: boolean;
};

type Props = {
  inputId: string;
  rules: string[];
};

const Rule: React.FC<Props> = ({ inputId, rules }: Props) => {
  const [ruleList, setRuleList] = useState<Rule[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (!input) return;

    const parsedRules = rules.map((rule) => ({
      regex: new RegExp(rule.trim()),
      isMatch: false,
    }));

    setRuleList(parsedRules);

    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      let newScore = 0;

      const updatedRules = parsedRules.map((rule) => {
        const isMatch = rule.regex.test(value);
        if (isMatch) newScore++;
        return { ...rule, isMatch };
      });

      setRuleList(updatedRules);
      setScore(newScore);
    };

    input.addEventListener("input", handleInput);

    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, [inputId, rules]);

  return (
    <div
      className="password-rules"
      data-score={score}
      style={{ "--score": score } as React.CSSProperties}
    >
      <div className="password-rules__meter">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="password-rules__score"></div>
      </div>
      <ul className="password-rules__checklist flow">
        <li
          data-rule-index="0"
          className={ruleList[0]?.isMatch ? "is-match" : ""}
        >
          Longer than 8 characters
        </li>
        <li
          data-rule-index="3"
          className={ruleList[3]?.isMatch ? "is-match" : ""}
        >
          Includes a lowercase letter
        </li>
        <li
          data-rule-index="4"
          className={ruleList[4]?.isMatch ? "is-match" : ""}
        >
          Includes an uppercase letter
        </li>
        <li
          data-rule-index="1"
          className={ruleList[1]?.isMatch ? "is-match" : ""}
        >
          Includes a number
        </li>
        <li
          data-rule-index="2"
          className={ruleList[2]?.isMatch ? "is-match" : ""}
        >
          Includes a special character
        </li>
      </ul>
    </div>
  );
};

export default Rule;
