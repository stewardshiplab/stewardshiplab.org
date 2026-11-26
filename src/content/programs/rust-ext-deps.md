---
title: "Declarative external dependencies in Rust"
fundedAmount: 0
targetAmount: 214560
ocUrl: "https://opencollective.com/stewardshiplab/projects/rust-ext-deps"
currency: "usd"
aim: "Improving security in the Rust package management ecosystem by declaratively recording non-Rust dependencies."
color: "var(--color-program-default)"
order: 5
resources:
- name: "Project pitch"
  url: "https://docs.google.com/document/d/13XejeQ7q1TvVnMvVyyuP24zkUffqSsQlhxZAfZQMqq4/edit?usp=sharing"
- name: "Budget breakdown"
  url: "https://docs.google.com/spreadsheets/d/1eFTxtuLtJB5gmmPxz71pKL-fK-j8aqoIgFZcSzviSa0/edit?usp=sharing"
---

Because there is no way to declaratively record a Rust package's dependency on a non-Rust package, CVEs from these
external dependencies are not easily identifiable from the Rust ecosystem. This means that some vulnerabilities cannot
be detected or mitigated, and that developers have incomplete information on their dependency graphs.

Rust's `build.rs` is used to build and link to external dependencies. But this strategy involves executing arbitrary
code, which poses problems: it makes dependency graph discovery and security review difficult; and it creates a vector
for build-time vulnerabilities in dependants of packages that use build.rs.

We propose creating a specification for a declarative `build.toml` file that allows Rust developers to specify their
external dependencies without being subject to the aforementioned security and discoverability problems.

To aid community adoption, we plan to additionally create a Rust dependency graph visualisation tool that will allow
developers to understand their dependencies in depth.
