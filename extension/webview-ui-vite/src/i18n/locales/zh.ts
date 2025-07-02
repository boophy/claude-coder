
export const zh = {
  translation: {
    "settings": {
      "title": "设置",
      "description": "管理您的扩展首选项",
      "selectTabPlaceholder": "选择一个标签页",
      "save":"保存设置",
      "tabs": {
        "preferences": "设置",
        "experimental": "实验性",
        "advanced": "高级",
        "agents": "Agents"
      },
      "language": "语言",
      "theme": "主题",
      "light": "浅色",
      "dark": "深色",
      "userInfo": {
        "signedInAs": "登录为",
        "signOut": "登出",
        "creditsRemaining": "Kodu 积分剩余",
        "addCredits": "增加积分",
        "freeCredits": "10美元免费积分",
        "signIn": "登录 Kodu",
        "haveApiKey": "有 Api Key 点击这里"
      },
      "preferences": {
        "chooseDefaultModel": "选择您的默认代码补全模型",
        "mainArchitectureModel": "主架构模型",
        "wantToUseCustomProvider": "想要使用自定义提供商？",
        "wantToSelectModels": "想要从列表中选择模型？",
        "clickHere": "点击这里",
        "agentSpecificModels": "特定于Agent的模型可以在“Agent”选项卡中配置。",
        "pickerModel": "选择一个模型",
        "cpm": "每百万 Token 价格",
        "context": "最大输入长度",
        "input": "最大输入长度（以 Token 为单位）",
        "inputCost": "输入价格",
        "outputCost": "输出价格",
        "writeCost": "缓存写入价格",
        "readCost": "缓存读取价格",
        "limit": "最大输出长度",
        "output": "模型最多可生成的 Token 数量",
        "price": "价格按每百万 Token 计算",
        "reqKey": "需要设置提供商密钥。点击此处设置提供商。",
        "noModel": "尚未选择模型。",
        "provider": "提供商",
        "delete": "删除提供商",
        "apply": "应用模型",
        "would": "您是否希望将此模型设为当前模型？",
        "no": "否，选择其他模型",
        "yes": "是，应用该模型",
        "image": "支持图像"
      },
      "experimental": {
        "features": {
          "alwaysAllowWriteOnly": {
            "label": "自动模式",
            "description": "Claude 会自动尝试解决任务，而无需请求许可"
          },
          "autoSummarize": {
            "label": "自动总结聊天",
            "description": "在上下文窗口溢出时自动压缩聊天消息，同时保留对话的关键流程"
          },
          "taskHistory": {
            "label": "一键部署",
            "description": "单击即可部署您的项目"
          }
        },
        "beta": "测试版",
        "betaDescription": "此功能目前处于封闭测试阶段，如果您想参与，请通过 Discord 与我们联系。",
        "danger": "危险"
      },
      "advanced": {
        "customizeInstructions": {
          "label": "自定义说明",
          "description": "让您自定义 Kodu 在执行任务时将遵循的说明。您可以自定义 Kodu 将遵循的工具和常规说明。",
          "button": "打开编辑器"
        },
        "gitHandler": {
          "label": "Git 处理程序",
          "description": "启用或禁用自动 git 操作和版本控制"
        },
        "gitCommitter": {
          "label": "Git 提交者",
          "kodu": "Kodu AI",
          "user": "用户个人资料",
          "description": "选择应归功于 git 提交的人"
        },
        "alwaysAllowReadOnly": {
          "label": "始终允许只读操作",
          "description": "自动读取文件和查看目录，无需权限"
        },
        "autoCloseTerminal": {
          "label": "自动关闭终端",
          "description": "执行命令后自动关闭终端"
        },
        "terminalCompression": {
          "label": "启用终端压缩",
          "description": "当输出超过上下文窗口末尾的阈值时，压缩终端输出以减少令牌使用",
          "thresholdLabel": "压缩阈值",
          "thresholdDescription": "调整终端输出将被压缩的令牌阈值"
        },
        "commandTimeout": {
            "label": "命令超时",
            "description": "设置命令在被终止前可以运行的最长时间（秒）"
        },
        "customInstructions": {
            "label": "自定义说明",
            "placeholder": "例如“最后运行单元测试”，“使用 TypeScript 和 async/await”",
            "description": "这些说明将包含在每个任务中"
        }
      },
        "agents": {
            "subTaskAgent": {
                "title": "子任务Agent",
                "badge": "已启用",
                "description": "让 Kodu 能够生成一个具有隔离上下文的 Agent，专门用于特定任务，并将最终信息传回 Kodu 主线程"
            },
            "coderAgent": {
                "title": "编码Agent",
                "badge": "早期测试",
                "description": "将 Kodu 切换到架构师模式，其主要目标是创建解决方案和收集知识，同时将复杂的编辑逻辑留给具有隔离上下文和工具的独立Agent来执行代码编辑"
            },
            "createAgent": {
                "button": "创建你的Agent",
                "tooltip": "即将推出"
            },
            "observerAgent": {
                "title": "观察员Agent",
                "toggleAriaLabel": "切换观察员Agent",
                "description": "一个智能观察员，实时监控 Kodu 的行为，提供反馈和见解以帮助优化性能。观察员分析模式，提出改进建议，并通过持续评估和反馈帮助保持与您目标的一致性。",
                "frequency": {
                    "label": "观察员频率（请求）",
                    "description": "观察员Agent分析 Kodu 行为的频率。较低的值意味着更频繁的观察，但可能会影响性能。",
                    "current": "当前：每 {{count}} 个请求",
                    "current_plural": "当前：每 {{count}} 个请求"
                },
                "messagesToAnalyze": {
                    "label": "要分析的消息",
                    "description": "观察员将审查的先前消息的数量以获取上下文。更多的消息提供更好的上下文，但可能会增加处理时间。",
                    "current": "当前：{{count}} 条消息",
                    "current_plural": "当前：{{count}} 条消息"
                },
                "selectModel": {
                    "label": "选择观察员模型",
                    "description": "将分析 Kodu 行为的 AI 模型。不同的模型可能会提供不同水平的洞察力和性能。",
                    "selectModelButton": "选择模型",
                    "setupProvider": "需要设置提供商密钥。点击此处设置提供商。"
                },
                "customPrompt": {
                    "label": "自定义提示",
                    "description": "自定义观察员的提示，为模型提供特殊说明或上下文。",
                    "editButton": "编辑提示",
                    "clearButton": "清除提示"
                }
            }
        }
    },
    "chat": {
      "headerTitle": "聊天",
      "inputPlaceholder": "输入消息...",
      "thinking": "思考中...",
      "resumeTask": "让我们从上次离开的地方继续任务",
      "taskPlaceholder": "在此处输入您的任务...",
      "maxContextReached": {
        "title": "已达到最大上下文限制",
        "description": "对话已达到其上下文窗口限制，无法继续。要继续，您需要开始一个新任务。别担心 - Kodu 在新任务中仍然可以访问您项目的文件和结构。",
        "button": "开始新任务"
      }
    },
    "files": {
      "totalFiles": "总文件数：{{count}}",
      "attachedFiles": "附加文件",
      "less": "更少",
      "noFilesAttached": "未附加文件。"
    },
    "buttons": {
      "submit": "提交",
      "cancel": "取消",
      "send": "发送",
      "close": "关闭",
      "changeToEnglish": "切换到英文",
      "changeToChinese": "切换到中文",
      "abort": "停止"
    },
    "greeting": "你好，世界！",
    "welcome": "欢迎，{{user}}！",
    "history": {
      "title": "历史记录",
      "searchPlaceholder": "名称或任务内容",
      "clearHistory": "清除历史记录",
      "clearHistoryDialog": {
        "title": "您确定要清除历史记录吗？",
        "description": "此操作无法撤消。所有历史记录将被永久删除",
        "deleteAll": "全部删除",
        "cancel": "取消"
      },
      "sort": {
        "newest": "最新的",
        "oldest": "最旧的",
        "mostTokens": "最多令牌",
        "mostExpensive": "最昂贵的",
        "mostRelevant": "最相关的",
        "mostRelevantTooltip": "搜索时按相关性排序（需要搜索查询）"
      },
      "done": "完成"
    },
    "fileDialog": {
      "title": "选择文件和文件夹",
      "description": "选择您想在消息中引用的文件和文件夹。",
      "addSelectedItems": "添加所选项目"
    },
    "fileTree": {
      "filterPlaceholder": "过滤文件和文件夹...",
      "maxSelectionError": "已达到最大选择限制。您最多可以选择 {{count}} 个项目。"
    },
    "chatScreen": {
      "whatToBuild": "我们今天构建什么？",
      "greeting": {
        "morning": "早上好",
        "afternoon": "下午好",
        "evening": "晚上好",
        "night": "深夜好"
      },
      "quickStart": {
        "landingPage": {
          "title": "让我们构建一个登录页面",
          "description": "创造有影响力的第一印象"
        },
        "dashboard": {
          "title": "让我们构建一个仪表板",
          "description": "有效地可视化数据"
        },
        "mobileApp": {
          "title": "让我们构建一个移动应用程序",
          "description": "为 iOS 和 Android 开发"
        },
        "customProject": {
          "title": "自定义项目",
          "description": "从你自己的想法开始"
        },
        "viewHistory": {
            "title": "查看以前的任务",
            "description": "恢复以前的任务"
        }
      },
      "previousTasks": "您以前的任务",
      "projectDialog": {
        "title": "你在想什么？",
        "go": "走起",
        "usePrompt": "使用提示",
        "cyclePrompt": "循环提示",
        "ariaLabel": "分享你关于 {{projectType}} 的想法"
      }
    },
    "executionPlan": {
      "title": "执行计划"
    },
    "diagnostics": {
      "loading": "正在加载诊断信息",
      "loaded": "诊断信息已加载",
      "analyzing": "正在分析文件以进行诊断...",
      "noIssues": "未发现问题",
      "results": "诊断结果"
    },
    "reasoning": {
      "thinking": "思考中...",
      "thoughtShort": "思考了片刻",
      "thoughtLessThanASecond": "思考了不到一秒",
      "thoughtSeconds": "思考了 {{count}} 秒",
      "thinkingInterrupted": "思考中断"
    },
    "thinkingSummary": {
      "title": "思考总结"
    },
    "buttonSection": {
      "startNewTask": "开始新任务",
      "resumeTask": "恢复任务",
      "markAsCompleted": "标记为已完成",
      "markAsIncomplete": "标记为未完成",
      "pauseAutomatic": "暂停自动",
      "resumeAutomatic": "恢复自动"
    },
    "abortButton": {
      "tooltip": "点击此处中止请求",
      "ariaLabel": "中止请求"
    },
    "attachedResources": {
      "seeAll": "查看全部 ({{count}})",
      "dialogTitle": "所有附加资源",
      "deleteAll": "全部删除",
      "confirmDeletion": {
        "title": "确认删除",
        "warningTitle": "警告",
        "warningDescription": "您确定要删除所有附加资源吗？此操作无法撤消。",
        "cancel": "取消"
      }
    },
    "announcement": {
      "title": "最新更新 (v2.3.0)",
      "line1": "🚀 新增 Claude 3.7 Sonnet - 强烈推荐作为日常使用的最新编码Agent",
      "line2": "⚙️ 新增自定义 Sonnet 思考令牌预算的选项",
      "line3": "🔧 使用您自己的 API 密钥直接连接到 Anthropic",
      "line4": "🧠 根据您的特定需求微调 Sonnet 的思考预算",
      "line5": "⚡️ 使用最新的 Claude 3.7 模型增强性能",
      "line6": "🔧 常规稳定性改进",
      "showMore": "显示更多",
      "showLess": "显示更少",
      "dismiss": "关闭",
      "fullChangelog": "查看完整更新日志"
    }
  }
}
