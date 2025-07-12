
export const en = {
  translation: {
    "com":{
      "input":"Input",
      "output":"Output",
      "cacheWrites":"Cache Writes",
      "cacheReads":"Cache Reads",
      "saveTmp":"Save Template",
      "unsavedTmp":"Unsaved template",
      "unsavedChange":"Unsaved changes",
      "editor":"Prompt Template Editor",
      "showPreview":"Show Preview",
      "showEditor":"Show Editor",
      "load":"Load",
      "copy":"Copy",
      "clear":"Clear",
      "save":"Save",
      "tmpName":"Template Name",
      "enterName":"Enter template name...",
      "cancel":"Cancel",
      "noTmp":"No templates found",
      "delete":"Delete",
      "copied":"Template copied to clipboard!"
    },
    "settings": {
      "title": "Settings",
      "description": "Manage your extension preferences",
      "selectTabPlaceholder": "Select a tab",
      "save":"Save Settings",
      "tabs": {
        "preferences": "Preferences",
        "experimental": "Experimental",
        "advanced": "Advanced",
        "agents": "Agents"
      },
      "language": "Language",
      "theme": "Theme",
      "light": "Light",
      "dark": "Dark",
      "userInfo": {
        "signedInAs": "Signed in as",
        "signOut": "sign out",
        "creditsRemaining": "Kodu Credits remaining",
        "addCredits": "Add Credits",
        "freeCredits": "$10 Free Credits",
        "signIn": "Sign in to Kodu",
        "haveApiKey": "Have Api Key click here"
      },
      "preferences": {
        "recommended":"Recommended",
        "chooseDefaultModel": "Choose your default code-completion model",
        "mainArchitectureModel": "Main Architecture Model",
        "wantToUseCustomProvider": "Want to use a custom provider? ",
        "wantToSelectModels": "Want to select models from the list? ",
        "clickHere": "click here",
        "agentSpecificModels": "Agent-specific models can be configured in the Agents tab.",
        "pickerModel":"Pick a Model",
        "cpm":"Cost per million tokens",
        "context":"Context Window",
        "input":" Maximum input size in tokens",
        "inputCost":"Input Cost",
        "outputCost":"Output Cost",
        "writeCost":"Cache Writes Cost",
        "readCost":"Cache Reads Cost",
        "limit":"Output Limit",
        "output":"The max tokens the model can produce",
        "price":"Prices are shown per million tokens",
        "reqKey":"Requires setting up a provider key. Click here to set up a provider.",
        "noModel":"No model selected yet.",
        "provider":"Provider",
        "delete":"Delete Provider",
        "apply":"Apply Model",
        "would":"Would you like to apply this model as your current model?",
        "no":"No, Select Different Model",
        "yes":"Yes, Apply Model",
        "image":"Support Images"
      },
      "experimental": {
        "features": {
          "alwaysAllowWriteOnly": {
            "label": "Automatic Mode",
            "description": "Claude will automatically try to solve tasks without asking for permission"
          },
          "autoSummarize": {
            "label": "AutoSummarize Chat",
            "description": "Automatically compress chat messages once context window is overflown while preserving the critical flow of the conversation"
          },
          "taskHistory": {
            "label": "One Click Deployment",
            "description": "Deploy your projects with a single click"
          }
        },
        "beta": "BETA",
        "betaDescription": "This feature is currently in closed beta, if you would like to participate please contact us via discord.",
        "danger": "DANGER"
      },
      "advanced": {
        "customizeInstructions": {
          "label": "Customize Instructions",
          "description": "Let's you customize the instructions that Kodu will follow when executing Tasks. You can customize the tools and general instructions that Kodu will follow.",
          "button": "Open Editor"
        },
        "gitHandler": {
          "label": "Git Handler",
          "description": "Enable or disable automatic git operations and version control"
        },
        "gitCommitter": {
          "label": "Git Committer",
          "kodu": "Kodu AI",
          "user": "User Profile",
          "description": "Choose who should be credited for git commits"
        },
        "alwaysAllowReadOnly": {
          "label": "Always Allow Read-Only Operations",
          "description": "Automatically read files and view directories without requiring permission"
        },
        "autoCloseTerminal": {
          "label": "Automatically close terminal",
          "description": "Automatically close the terminal after executing a command"
        },
        "terminalCompression": {
          "label": "Enable Terminal Compression",
          "description": "Compress terminal output to reduce token usage when the output exceeds the threshold at the end of context window",
          "thresholdLabel": "Compression Threshold",
          "thresholdDescription": "Adjust the token threshold at which terminal output will be compressed"
        },
        "commandTimeout": {
            "label": "Command Timeout",
            "description": "Set the maximum time in seconds that a command can run before being terminated"
        },
        "customInstructions": {
            "label": "Custom Instructions",
            "placeholder": "e.g. 'Run unit tests at the end', 'Use TypeScript with async/await'",
            "description": "These instructions will be included in every task"
        }
      },
        "agents": {
            "subTaskAgent": {
                "title": "Sub Task Agent",
                "badge": "Enabled",
                "description": "Let's kodu spawn a sequentual agent with isolated context only for a specifc task passing back and the final information to Kodu main thread"
            },
            "coderAgent": {
                "title": "Coder Agent",
                "badge": "Early Testing",
                "description": "Switches Kodu to act as an architecture mode where it primary goal is to create a solution and gather knowledge while leaving the complex editing logic to a seperate agent with isolated context and tools to only perform code edits"
            },
            "createAgent": {
                "button": "Create Your Agent",
                "tooltip": "Coming Soon"
            },
            "observerAgent": {
                "title": "Observer Agent",
                "toggleAriaLabel": "Toggle observer agent",
                "description": "An intelligent observer that monitors Kodu's actions in real-time, providing feedback and insights to help optimize performance. The observer analyzes patterns, suggests improvements, and helps maintain alignment with your goals through continuous evaluation and feedback.",
                "frequency": {
                    "label": "Observer Frequency (requests)",
                    "description": "How often the observer agent should analyze Kodu's actions. Lower values mean more frequent observations but may impact performance.",
                    "current": "Current: Every {{count}} request",
                    "current_plural": "Current: Every {{count}} requests"
                },
                "messagesToAnalyze": {
                    "label": "Messages to Analyze",
                    "description": "Number of previous messages the observer will review for context. More messages provide better context but may increase processing time.",
                    "current": "Current: {{count}} message",
                    "current_plural": "Current: {{count}} messages"
                },
                "selectModel": {
                    "label": "Select Observer Model",
                    "description": "The AI model that will analyze Kodu's actions. Different models may offer varying levels of insight and performance.",
                    "selectModelButton": "Select Model",
                    "setupProvider": "Requires setting up a provider key. Click here to set up a provider."
                },
                "customPrompt": {
                    "label": "Custom Prompt",
                    "description": "Customize the observer's prompt to provide special instructions or context for the model.",
                    "editButton": "Edit Prompt",
                    "clearButton": "Clear Prompt"
                }
            }
        }
    },
    "chat": {
      "recent":"Recent Tasks",
      "allHistory":"View all history",
      "start":"Type your task or use @ to mention files or folders or URLs",
      "headerTitle": "Chat",
      "inputPlaceholder": "Type a message...",
      "thinking": "Thinking...",
      "resumeTask": "Let's resume the task from where we left off",
      "taskPlaceholder": "Type your task here...",
      "maxContextReached": {
        "title": "Maximum context limit reached",
        "description": "The conversation has reached its context window limit and cannot continue further. To proceed, you'll need to start a new task. Don't worry - Kodu will still have access to your project's files and structure in the new task.",
        "button": "Start New Task"
      }
    },
    "files": {
      "totalFiles": "Total files: {{count}}",
      "attachedFiles": "Attached Files",
      "less": "Less",
      "noFilesAttached": "No files attached."
    },
    "buttons": {
      "submit": "Submit",
      "cancel": "Cancel",
      "send": "Send",
      "close": "Close",
      "changeToEnglish": "Switch to English",
      "changeToChinese": "Switch to Chinese",
      "abort": "Stop"
    },
    "welcome": "Welcome, {{user}}!",
    "history": {
      "title": "History",
      "searchPlaceholder": "Name or task content",
      "clearHistory": "Clear History",
      "clearHistoryDialog": {
        "title": "Are you sure you want to clear your history?",
        "description": "This action cannot be undone. All history will be permanently deleted",
        "deleteAll": "Delete All",
        "cancel": "Cancel"
      },
      "sort": {
        "newest": "Newest",
        "oldest": "Oldest",
        "mostTokens": "Most Tokens",
        "mostExpensive": "Most Expensive",
        "mostRelevant": "Most Relevant",
        "mostRelevantTooltip": "Sort by relevance when searching (requires a search query)"
      },
      "done": "Done"
    },
    "fileDialog": {
      "title": "Select Files and Folders",
      "description": "Choose the files and folders you want to reference in your message.",
      "addSelectedItems": "Add Selected Items"
    },
    "fileTree": {
      "filterPlaceholder": "Filter files and folders...",
      "maxSelectionError": "Maximum selection limit reached. You can select up to {{count}} items."
    },
    "chatScreen": {
      "whatToBuild": "What should we build today?",
      "greeting": {
        "morning": "Good morning",
        "afternoon": "Good afternoon",
        "evening": "Good evening",
        "night": "Happy late night"
      },
      "quickStart": {
        "landingPage": {
          "title": "Let's build a landing page",
          "description": "Create an impactful first impression"
        },
        "dashboard": {
          "title": "Let's build a dashboard",
          "description": "Visualize data effectively"
        },
        "mobileApp": {
          "title": "Let's build a mobile application",
          "description": "Develop for iOS and Android"
        },
        "customProject": {
          "title": "Custom project",
          "description": "Start with your own idea"
        },
        "viewHistory": {
            "title": "View previous tasks",
            "description": "Resume a previous task"
        }
      },
      "previousTasks": "Your previous tasks",
      "projectDialog": {
        "title": "What's on your mind ?",
        "go": "GO",
        "usePrompt": "Use Prompt",
        "cyclePrompt": "Cycle Prompt",
        "ariaLabel": "Share your thoughts about your {{projectType}}"
      }
    },
    "executionPlan": {
      "title": "Execution Plan"
    },
    "diagnostics": {
      "loading": "Loading Diagnostics",
      "loaded": "Diagnostics Loaded",
      "analyzing": "Analyzing files for diagnostics...",
      "noIssues": "No issues found",
      "results": "Diagnostic Results"
    },
    "reasoning": {
      "thinking": "Thinking...",
      "thoughtShort": "Thought for a short moment",
      "thoughtLessThanASecond": "Thought for less than a second",
      "thoughtSeconds": "Thought {{count}} second",
      "thoughtSeconds_plural": "Thought {{count}} seconds",
      "thinkingInterrupted": "Thinking Interrupted"
    },
    "thinkingSummary": {
      "title": "Thinking Summary"
    },
    "buttonSection": {
      "startNewTask": "Start New Task",
      "resumeTask": "Resume Task",
      "markAsCompleted": "Mark as Completed",
      "markAsIncomplete": "Mark as Incomplete",
      "pauseAutomatic": "Pause Automatic",
      "resumeAutomatic": "Resume Automatic"
    },
    "abortButton": {
      "tooltip": "Click here to abort request",
      "ariaLabel": "Abort Request"
    },
    "attachedResources": {
      "seeAll": "See All ({{count}})",
      "dialogTitle": "All Attached Resources",
      "deleteAll": "Delete All",
      "confirmDeletion": {
        "title": "Confirm Deletion",
        "warningTitle": "Warning",
        "warningDescription": "Are you sure you want to delete all attached resources? This action cannot be undone.",
        "cancel": "Cancel"
      }
    },
    "announcement": {
      "title": "Latest Updates (v2.3.0)",
      "line1": "🚀 Added Claude 3.7 Sonnet - New SOTA coding agent highly recommended as daily driver",
      "line2": "⚙️ Added option to customize Sonnet thinking tokens budget",
      "line3": "🔧 Direct connection to Anthropic using your own API key",
      "line4": "🧠 Fine-tune Sonnet's thinking budget for your specific needs",
      "line5": "⚡️ Enhanced performance with the latest Claude 3.7 model",
      "line6": "🔧 General stability improvements",
      "showMore": "Show more",
      "showLess": "Show less",
      "dismiss": "Dismiss",
      "fullChangelog": "View full changelog"
    }
  }
}
