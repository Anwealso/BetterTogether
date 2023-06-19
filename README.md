# Interactive Campaign Billboard - DECO3801 Team Project

Social welfare visibility system integrating interactive live-data display billboards, info website and 

---

If you are setting up for the first time, please follow the  install guide in SETUP.md.

## Important Notes

 * **Make sure to create a new personal branch / feature branch when you start working on a new feature!!!**

* Login credentials for the django server admin account:
`Username: admin`
`Password: 123`

## Current Sitemap (Depracated)

```/``` goes to the surveys homepage, which shows a list of all the available surveys

```/<int:survey_id>/``` shows the details of a survey (quesitons, answer options, etc.)

```/<int:survey_id>/results/``` see the results of a survey

```/billboard``` a billboard displaying a particular survey result
