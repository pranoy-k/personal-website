# Resume Version History

The website always serves the current resume from `PranoyResume2026.pdf`
(linked from `/resume`). Superseded revisions of the current year are kept in
`archive/` with a version number and date. When updating the resume:

1. Move the current PDF into `archive/` as `PranoyResume<year>_v<N>_<YYYY-MM-DD>.pdf`
2. Drop the new PDF in as `PranoyResume<year>.pdf` (same filename keeps the site URL stable)
3. Add an entry at the top of the changelog below

## Changelog

### v6 — 2026-10-05 (current: `PranoyResume2026.pdf`)
- Removed email and phone number from the header to reduce exposure of
  personal contact info on a public page; kept location and LinkedIn so
  people can still reach out

### v5 — 2026-09-27 (`archive/PranoyResume2026_v5_2026-09-27.pdf`)
- Removed "(Engineering DRI)" from the "Adversarial Robustness, Agentic
  Planners" bullet heading

### v4 — 2026-09-27 (`archive/PranoyResume2026_v4_2026-09-27.pdf`)
- Removed the "Updated July 2026" header stamp
- Split the single 2019–2024 Google block into three distinct roles with
  their own dates: Tech Lead (2024, Vertex AI Safety), Senior Software
  Engineer (2021–2023, Bard/Gemini), Software Engineer (2019–2020, Text
  Content Safety)
- Added a new Apple bullet: Multimodal Post-Training (DRI) — extending the
  on-device guardrail adapter to image+text, adversarial-robustness
  preprocessing, teacher-student distillation, automated checkpoint selection
- Added a new Apple bullet: Adversarial Robustness, Agentic Planners
  (Engineering DRI) — closed-loop red-teaming harness for agentic planner
  models
- Added a new bullet under the 2019–2020 Google role: LLM-Powered Code
  Deobfuscation (CASCADE) — the ICSE 2026 published research, with concrete
  results (99.56% prelude detection, ~945 string literals/sample)
- Reworked the Multimodal Autograder bullet (now 7 prompt architectures) and
  reworded the Crisis-Response Classifier and AutoMUM precision figures
- Removed the patent number from the summary line (kept in full under
  Publications & Patents)
- General formatting cleanup: consistent bullet markers, fixed ligature
  rendering (fi/fl), normalized spacing around role separators

### v3 — 2026-07-20 (`archive/PranoyResume2026_v3_2026-07-20.pdf`)
- Stamped "Updated July 2026" on the header
- US patent updated from application to granted: U.S. Patent No. 12,586,398 B2,
  "Detecting a Homoglyph in a String of Characters" (granted March 2026)
- Corrected Apple safety-infrastructure scope: 6 safety categories, 58
  subcategories, 16 languages (previously "17 categories across multiple languages")
- Corrected text deobfuscation deployment figures: 1.5M+ QPS / 100B+ queries
  per day (previously "1B+ QPS")
- More precise precision/false-positive metrics for the AutoMUM work and
  reworded translation-inference cost savings

### v2 — 2026-07-16 (`archive/PranoyResume2026_v2_2026-07-16.pdf`)
- Fixed date formatting for the dates associated with each project

### v1 — 2026-07-15 (`archive/PranoyResume2026_v1_2026-07-15.pdf`)
- First 2026 resume (from Pranoy_Kovuri_April_2026.docx): Apple Staff MLE role,
  contact email changed from pranoy@apple.com to kovuripranoy@gmail.com

### 2025 (`PranoyResume2025.pdf`)
- 2025 resume, superseded by the 2026 versions

### 2024 (`PranoyResume2024.pdf`)
- 2024 resume, the original version the site launched with
