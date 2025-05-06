// lamatic-widget.js

(function () {
    // Load external scripts
    const emojiScript = document.createElement("script");
    emojiScript.src = "https://widget.lamatic.ai/chat/emojiPicker.js";
    emojiScript.async = true;
    document.head.appendChild(emojiScript);
  
    const indexScript = document.createElement("script");
    indexScript.src = "https://widget.lamatic.ai/chat/index.js";
    indexScript.async = true;
    indexScript.onload = loadChatDialog;
    document.head.appendChild(indexScript);
  
    // Widget config
    const CHAT_DIALOG_CONFIG = {
      widgetTypes: 1,
      botName: "Aut et reprehenderit",
      suggestions: ["Quis voluptatibus is"],
      policyUrl: "https://lamatic.ai/docs/legal/privacy-policy",
      apiUrl: "https://sandbox-inference-api.lamatic.tech",
      chatHeaderBgColor: "#4D888B",
      userMessageBgColor: "#E0F7FA",
      userMessageTextColor: "blue",
      agentMessageBgColor: "#F1F8E9",
      agentMessageTextColor: "#1B5E20",
      position: "right",
      floatingButtonIcon: "💬",
      userId: "",
      headerTextColor: "#fff",
      errorMessage: "Some error has taken place",
      context: "Excepteur nihil porr",
      prompts: "Harum tempore sint ",
      creatorName: "Ipsum sint quae bla",
      projectId: "17cf7f76-9f52-4d54-91b4-9c28b75392d8",
      workflowId: "f3bebdf9-ea7e-4f67-a41c-4b1228d84b1c",
      legalNotice: "Quisquam odio simili",
      certainty: 30,
      imageUrl: "https://api.nemo.imperoserver.in/uploads/chatbot/68187974228b6ec3eef07cf0/1746536007258_7956631077612490.jpg",
      floatingButtonStyle: {
        bgColor: "#f0f0f0",
        radius: 50
      }
    };
  
    function loadChatDialog() {
      const chatDialogInstance = new ChatDialog(CHAT_DIALOG_CONFIG);
      if (chatDialogInstance && typeof chatDialogInstance.open === "function") {
        chatDialogInstance.isOpen = true;
        chatDialogInstance.overlay.style.display = "block";
        chatDialogInstance.loadMessages();
  
        if (chatDialogInstance.suggestionsEnabled) {
          chatDialogInstance.updateSuggestions(chatDialogInstance.suggestions);
        }
  
        chatDialogInstance.floatingButton.style.pointerEvents = "none";
  
        const input = document.querySelector(".lamatic-chat-input");
        const privacyContainer = document.querySelector(".lamatic-privacy-policy");
        const headerImage = document.querySelector(".lamatic-header-left img");
  
        if (input) input.placeholder = "Type a reply...";
        if (privacyContainer) privacyContainer.innerHTML = "Powered by <strong>Nemo</strong>";
        if (headerImage && chatDialogInstance.imageUrl) {
          headerImage.src = chatDialogInstance.imageUrl;
        }
      }
    }
  
    // Inject style
    const style = document.createElement("style");
    style.textContent = `
      .lamatic-chat-content p { margin:0px !important;}
      .lamatic-chat-dialog { width:300px !important;}
      .lamatic-chat-content { word-break: break-word; overflow-wrap: break-word; }
      .lamatic-chat-dialog-overlay {
        visibility: visible !important;
        opacity: 1 !important;
        padding-bottom:90px !important;
        bottom: 0px !important;
      }
      .lamatic-floating-button { border-radius: 50px !important; background-color: #f0f0f0 !important; }
      .lamatic-chat-message { font-size: small !important; }
      .lamatic-header-text { color: #fff }
    `;
    document.head.appendChild(style);
  })();
  