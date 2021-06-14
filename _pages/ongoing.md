---
layout: archive
title: "Ongoing Work"
permalink: /ongoing/
author_profile: true
---

{% include base_path %}

{% for post in site.ongoing reversed %}
  {% include archive-single-ongoing.html %}
{% endfor %}
