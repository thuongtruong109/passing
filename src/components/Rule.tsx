import React, { useEffect, useState } from "react";

type Rule = {
  regex: RegExp;
  isMatch: boolean;
};

type Props = {
  inputData: string;
};

const Rule: React.FC<Props> = ({ inputData }: Props) => {
  const [ruleList, setRuleList] = useState<Rule[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (inputData.length > 0) {
      const parsedRules = [".{9}", ".*\\d", "[\\W_]", "[a-z]", "[A-Z]"].map(
        (rule) => ({
          regex: new RegExp(rule.trim()),
          isMatch: false,
        })
      );

      setRuleList(parsedRules);

      let newScore = 0;

      const updatedRules = parsedRules.map((rule) => {
        const isMatch = rule.regex.test(inputData);
        if (isMatch) newScore++;
        return { ...rule, isMatch };
      });

      setRuleList(updatedRules);
      setScore(newScore);
    } else {
      setScore(0);
    }
  }, [inputData]);

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
