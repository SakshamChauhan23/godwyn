# Godwyn.ai Website
### Product Requirements Document

*AI native workflows and platforms for SMB and mid market companies*

| Field | Detail |
|---|---|
| Prepared for | Godwyn.ai |
| Document owner | Saksham |
| Version | 1.1 |
| Date | July 30, 2026 |
| Status | Draft, for review |
| Source document | Godwyn.ai Landing Page Framework (Launch Messaging Guide) |

---

## 1. Purpose and background

Godwyn.ai needs a standalone website that presents it as a product company that builds AI native workflows and platforms, not a consulting shop that sells hours. The site carries an independent identity while acknowledging its origin as the intelligence behind Rouze, a deal intelligence platform for competitive sales conversations.

The Launch Messaging Guide already defines positioning, section by section copy, pricing, engagement model, and visual direction. This document treats that guide as the content source of truth and translates it into a build ready specification. The area the messaging guide does not yet cover in technical depth, and the focus of this document, is motion design and three dimensional interaction across the page.

Copy for every page section referenced below is defined in the source document and should not be rewritten during implementation without a content change request. This PRD governs structure, interaction, technical approach, and acceptance criteria.

## 2. Goals

- **Position as a builder, not a vendor of hours.** A visitor should leave the page believing Godwyn ships working systems, expressed through the read, decide, create, act framing rather than a services pitch.
- **Convert workflow recognition into submission.** The primary success event is a completed intake form describing a real, repetitive workflow, not a generic contact form fill.
- **Make the central distinction land in the first screen.** A visitor should understand the difference between traditional automation and Godwyn's model without needing to scroll past the hero.
- **Use Rouze as proof of build capability without subordinating it.** The Born Inside Rouze section should read as evidence of real shipped work, while avoiding any language that frames Rouze as a flagship product, a portfolio item, or something Godwyn built for a client.
- **Protect performance despite visual ambition.** Motion and three dimensional elements must not push load time, interactivity, or accessibility outside acceptable bounds on a typical SMB buyer's device.

## 3. Non goals

- **No customer login or dashboard area.** Godwyn currently sells fixed scope engagements, not self serve software, so no account system is required at launch.
- **No customer results, logos, or case studies.** The messaging guide is explicit that results should not be claimed until they exist. The site should not include placeholder proof of any kind.
- **No deep explanation of Rouze's product.** One reference section and an outbound link are sufficient. A second product's full narrative does not belong on this site.
- **No chatbot or conversational widget on launch.** A generic chat interface would undercut the message that Godwyn builds real systems rather than chatbot experiences.
- **No multi language support at launch.** English only for version one. Localization can be scoped later if a market signal appears.

## 4. Target users and fit criteria

The site should qualify visitors against the same fit criteria the engagement model uses, so that the intake form filters for workflows Godwyn actually wants to build.

**Good fit signals to reinforce in copy and form design**
- The workflow happens repeatedly and consumes meaningful time or revenue
- The required data is accessible and the outcome can be measured
- The company wants a working platform, not an AI presentation
- There is an internal owner who understands the process end to end

**Signals that should be gently discouraged**
- The company is looking for a basic chatbot or a simple point to point connection
- There is no internal owner of the workflow and no measurable outcome

The intake form questions in Section 12 of the messaging guide already do this filtering work through their phrasing. No additional qualification step is needed before submission.

## 5. Site architecture and navigation

The site is a single scrolling page with anchor based navigation, not a multi page structure. This keeps the narrative arc intact from problem recognition through to the intake form, and matches the messaging guide's framing of one continuous argument.

**Navigation bar**
- What We Build
- How It Works
- Born Inside Rouze
- Pricing
- Show Us the Workflow, styled as the primary call to action and pinned visibly while scrolling

Below is the full section inventory carried over from the messaging guide, mapped to build priority. P0 sections must exist at launch. P1 sections can follow shortly after if a phased build is required.

| # | Section | Purpose | Priority |
|---|---|---|---|
| 1 | Navigation | Persistent wayfinding and primary CTA | P0 |
| 2 | Hero | State the core message and show the workflow animation | P0 |
| 3 | Problem recognition | Get the visitor to recognize their own workflow | P0 |
| 4 | Central distinction | Contrast traditional automation with Godwyn's model | P0 |
| 5 | What Godwyn builds | Explain the read, decide, create, act pipeline | P0 |
| 6 | Born inside Rouze | Establish proof of build capability | P0 |
| 7 | Engagement model | Explain Blueprint, Build, Launch and own, Evolve | P0 |
| 8 | Example workflows | Give concrete recognition examples | P1 |
| 9 | Pricing | Present the three engagement tiers | P0 |
| 10 | Fit filter | Self qualify good fit versus poor fit | P1 |
| 11 | Trust and ownership | State data and ownership principles | P0 |
| 12 | Final CTA and intake form | Capture the workflow submission | P0 |


- **Typography:** no specific typeface is defined in the messaging guide beyond soft white typography. Treat the type pairing as an open design decision, not something to invent during engineering. See Open Questions.
- **Imagery:** workflow diagrams and real interfaces only. No stock photography and no generic AI imagery such as robots or floating brain graphics.
- **Relationship to Rouze:** the shared accent color lineage should feel intentional without making Godwyn read as a renamed Rouze page. Godwyn should feel broader, architectural, and generative, where Rouze remains focused and tactical.
