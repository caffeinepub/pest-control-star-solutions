# Specification

## Summary
**Goal:** Update the Home page “Our Team” section to display the team member name “Yash Gorivale” instead of “Amit Patel”.

**Planned changes:**
- Update the shared team member data in `frontend/src/config/team.ts` by changing the relevant member’s name from “Amit Patel” to “Yash Gorivale”.
- Ensure the Home page OurTeamSection renders the updated name via the shared data source (no hardcoding in the component).

**User-visible outcome:** On the Home page, the “Our Team” card that previously showed “Amit Patel” now shows “Yash Gorivale”.
