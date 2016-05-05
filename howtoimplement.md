# Implementation

include LUI **router.less** before your project styles, default configuration is in **config.less**. If you want to edit default variables, we recommend using custom configufation .less file and include it after LUI in your project file.

**example:**  
My project file has "main.less" file which includes LUI, and few other .less files. You can include another "config.less" file with custom variable settings

```
// LESS UI FRAMEWORK
@import "lui/lui/less/router.less";

// CUSTOM LUI CONFIGURATION
@import "config.less";

// OTHER PROJECT STYLES
@import "theme.less";

```

lets say i want default LUI buttons black. I will put this in my config.less which is included AFTER LUI framework:
```
@btn_color_default:		black;
```

# Compiling

We do not include any tool to compile less files, you can use Less javascript compiler for development, server side compilation or client side manual compilation (winless)

More about LESS: http://lesscss.org/usage/

