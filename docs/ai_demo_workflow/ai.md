# AI Trading Chatbot Architecture Overview

## Overall architecture

```text
User
↓
Chat AI
↓
Internal AI System
↓
Backend Functions / Services
↓
Rule Validation Layer
↓
Answer to User

If user wants to trade:
Order Preview
↓
User Confirmation
↓
Order Execution
```

## Core idea

- AI handles understanding, retrieval, explanation, and orchestration.
- Backend handles facts, calculations, and transactions.
- Rules handle safety, compliance, and control.
- User confirmation is required before any real trade.

## Main components

### 1. Chat LLM
Responsible for:
- understanding user intent
- managing conversation
- deciding when to call tools
- explaining results in natural language

### 2. Internal AI System
Includes:
- LLM
- prompt engineering
- RAG
- agentic workflow
- internal database retrieval

Responsible for:
- retrieving internal context
- grounding answers with trusted internal knowledge
- enriching responses before backend data is used

### 3. Backend Functions / Services
Responsible for:
- market data
- portfolio data
- recommendation candidates
- price lookup
- order preview generation
- order execution after confirmation

### 4. Rule Validation Layer
Responsible for:
- compliance checks
- suitability checks
- blocking risky or misleading claims
- validating freshness and consistency

### 5. User Confirmation Layer
Responsible for:
- final human approval before a trade is executed

## Design principle

**AI can recommend and prepare. Backend executes only after explicit user confirmation.**

# AI Trading Chatbot Flow

## Information request flow

```text
User
→ Chat LLM
→ Internal AI / RAG
→ Backend data functions
→ Rule validation
→ Answer
```

## Trading request flow

```text
User
→ Chat LLM
→ Internal AI / RAG
→ Backend order preview
→ Rule validation
→ Preview shown to user
→ User confirms
→ Backend executes order
```

## Step-by-step flow

### 1. User sends a message
Examples:
- "How is the market today?"
- "What stock do you recommend?"
- "I want to buy this one"

The app sends the message to the AI layer.

### 2. Chat AI interprets the request
The Chat LLM identifies the intent, such as:
- market summary request
- recommendation request
- portfolio question
- buy intent

### 3. Internal AI System retrieves context
The internal system uses trusted internal data and retrieval to gather:
- user profile context
- risk and suitability context
- internal knowledge or research
- relevant business rules

### 4. Backend functions provide deterministic results
Backend services return real factual data such as:
- live or approved market data
- portfolio values
- recommendation candidates
- order preview calculations

### 5. Rule validation checks the response
Before anything is shown to the user, the output is checked for:
- compliance
- suitability
- consistency
- unsupported claims
- stale data

### 6. System returns the answer to the user
The Chat LLM presents the result clearly in natural language.

### 7. If the user wants to buy, generate order preview
The system creates an order preview instead of executing immediately.

The preview may include:
- symbol
- side
- amount or quantity
- estimated price
- fees
- estimated total

### 8. User confirms the order
The user reviews the preview in the app and explicitly taps confirm.

### 9. Backend executes the order
Only after confirmation, the backend:
- validates funds
- validates permissions
- validates market status
- submits the order
- returns the result

# AI Roles and Rules

## AI used in the system

### 1. Chat LLM
Examples:
- OpenAI model
- Claude
- Gemini

#### Duty
- understand user intent
- manage the conversation
- decide when to call tools
- explain outputs clearly

#### Should do
- chat
- summarize
- explain
- orchestrate

#### Should not do
- invent prices
- invent portfolio values
- place trades directly

---

### 2. Internal AI System
Includes:
- LLM
- prompt engineering
- RAG
- agentic workflow
- internal database retrieval

#### Duty
- retrieve internal context
- ground answers with trusted internal sources
- support recommendation logic
- prepare useful context for final responses

#### Should do
- retrieve
- rank
- summarize
- contextualize

#### Should not do
- be the final source of truth for live market data
- bypass backend business logic
- directly execute orders

---

### 3. Optional Safety / Moderation AI
#### Duty
- detect unsafe or non-compliant output
- flag manipulative or unsupported financial claims
- support policy enforcement

## Rules in each layer

### Layer 1: Chat layer
Rules:
- understand intent correctly
- do not answer with invented facts
- use tools when facts are needed
- keep language clear and non-misleading

### Layer 2: Internal AI / retrieval layer
Rules:
- retrieve only trusted internal sources
- do not mix unverified data into critical answers
- do not override backend source-of-truth data

### Layer 3: Backend function layer
Rules:
- all numeric and transactional data comes from backend
- backend is the source of truth
- all calculations must be deterministic
- all market and order logic must be validated here

### Layer 4: Rule validation layer
Rules:
- no guaranteed returns
- no misleading claims
- no unsupported recommendation statements
- check suitability and policy constraints
- check freshness and consistency
- block dangerous or non-compliant output

### Layer 5: Execution layer
Rules:
- no direct AI execution of orders
- user confirmation is mandatory
- backend re-validates before execution
- all trades must be logged and auditable

## Final principle

**LLM understands and explains. Internal AI retrieves and contextualizes. Backend computes and executes. Rules validate. User confirms before trading.**