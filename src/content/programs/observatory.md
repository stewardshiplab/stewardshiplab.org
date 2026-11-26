---
title: "Open Infrastructure Observatory"
fundedAmount: 0
targetAmount: 133000
ocUrl: "https://opencollective.com/stewardshiplab/projects/open-infrastructure-obs"
currency: "gbp"
aim: "Empowering users, funders and researchers to identify critical Open Source projects at risk of being unmaintained."
color: "var(--color-program-default)"
order: 6
---

We are currently building the components of an observatory that allows users to identify and monitor the world's
critical Open Source packages in real time.

A public observatory would inform users and companies when dependencies become insecure or unmaintained. It would allow
funders to intelligently allocate money to the most critical projects. And it would empower researchers, governments and
foundations to understand how Open Source software underpins our global tech infrastructure.

We are doing this work in a piecemeal fashion, starting with the features listed here. We are looking for funding to
develop the broader project as a public-benefit resource.

<h3>Components</h3>
<div class="program__features">
  <div class="program__feature">
    <h4>Unveiling Binary Dependencies</h4>
    <div>
      Many packages
      <a href="/reports/binary-dependencies-identifying-the-hidden-packages-we-all-depend-on"
        >depend on binaries</a
      >,
      but this dependency relationship is hidden and
      cannot be recorded by package managers.
    </div>
  </div>
  <div class="program__feature">
    <h4>Connecting Repackaged Packages</h4>
    <div>
      CVEs are filed against a canonical package like <em>pypi/pip</em>,
      but
      <a
        href="https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html"
        target="_blank"
      >repackaged</a>
      versions (eg in Homebrew or Nix) lose this security information.
    </div>
  </div>
  <div class="program__feature">
    <h4>Identifying Bernies</h4>
    <div>
      Critical packages can covertly become <a href="/ideas/weekend-at-bernies">Bernies</a> —
      packages that appear maintained but are really abandoned.
    </div>
  </div>
  <div class="program__feature">
    <h4>Tracking Patches</h4>
    <div>
      Many packages are augmented by system package managers' patches. However, the security implications of
      these patches are not currently tracked.
    </div>
  </div>
</div>
