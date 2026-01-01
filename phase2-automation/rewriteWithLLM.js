async function rewriteWithLLM(title, scrapedContents, referenceLinks) {
  return `
## ${title}

### Overview
Artificial Intelligence (AI) is rapidly transforming multiple industries, including healthcare. By leveraging machine learning, natural language processing, and data-driven decision-making, AI systems are assisting professionals in delivering better outcomes.

### Key Insights
- AI can support doctors by analyzing large datasets faster than humans.
- It helps in diagnostics, treatment recommendations, and patient monitoring.
- Ethical concerns such as responsibility and accuracy remain important.

### Challenges
- Bias in training data
- Accountability for AI-driven decisions
- Regulatory and legal concerns

### Conclusion
AI should be seen as a decision-support tool rather than a replacement for human expertise. With proper governance, it has the potential to significantly improve patient care.

### References
${referenceLinks.map(link => `- ${link}`).join("\n")}
`;
}

module.exports = rewriteWithLLM;
