---
title: "Securing Python's binary dependencies"
fundedAmount: 0
targetAmount: 69120
ocUrl: "https://opencollective.com/stewardshiplab/projects/bindep-python"
currency: "usd"
aim: "Improving security by bringing hidden binary dependency relationships to light."
color: "var(--color-program-default)"
order: 4
resources:
- name: "Funding proposal"
  url: "https://static.stewardshiplab.org/proposal.bindep.pdf"
---

A large amount of infrastructure relies on Python for its ability to easily interface with compiled libraries,
particularly AI and scientific software. However, package management tooling in the Python ecosystem does not record
these _binary dependency_ relationships, which most frequently occur when Python code calls compiled libraries written
in languages such as C or Rust.

This means that developers cannot track or remediate CVEs in these dependencies; cannot know when these
libraries become unmaintained “Bernies”; and cannot offer support to the maintainers of their binary
dependencies.
Given that around
[20.4%](/reports/burnout-in-open-source-a-structural-problem-we-can-fix-together/)
of popular Python packages include binary dependencies, this status quo puts critical Python-based technology,
from AI to built infrastructure, at risk of cyberattacks and degradation.

We propose a solution then can make a large positive impact on the security of the Python ecosystem with a
comparatively small investment; can be integrated as a default into existing tools; and is structured so that
it can be, in principle, ported to other language ecosystems in the future.
