<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, i) in items" :key="i">
      <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-btn color="primary" class="ma-2 white--text" @click="window.open(item.url)">
          Download {{ item.version }}
          <v-icon right dark>mdi-download</v-icon>
        </v-btn>
        <editor v-model="item.description" mode="viewer" :outline="false" :render-config="renderConfig" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import Vue from 'vue';
import { Editor } from 'vuetify-markdown-editor';

export default Vue.extend({
  components: {
    Editor,
  },
  data: () => ({
    window,
    renderConfig: {
      mermaid: {
        theme: 'dark',
      },
    },
    items: [
      {
        title: 'No$GBA for Mac',
        url: 'http://adf.ly/1hbZH9',
        version: 'Build 13',
        description: `[No\\$GBA](http://www.nogba.com/) is originally a Windows only Nintendo DS & GBA emulator. This is a port that I made using the popular [Wineskin](http://wineskin.urgesoftware.com/) wrapper to run No$GBA via wine. You don't need to have Wineskin on your Mac for this port to work.

### Frequently Asked Questions

__Q.__ Where are my save files located at?

__A.__ They are inside the application package itself. Right click on the application, select "Show Package Contents." From there, double click "Save Files" shortcut. Your save files should be there.

__Q.__ How do I increase the screen size?

__A.__ With build 13, you can now just drag the window corners or double click the window title to maximize it and the game area should stretch accordingly.

__Q.__ How do I increase the running speed of the emulator?

__A.__ By default, holding the "delete" button on your keyboard should mutiply the running speed by roughly 5.`,
      },
      {
        title: 'Network Tuner',
        url: 'http://www.mediafire.com/?q3v9zqbqlgrs95e',
        version: '1.1.0',
        description: `__This project is abandoned, meaning that no new versions will come.__

_Does not run on PPC Macs. Requires Mac OS X 10.6 or later. On 10.8 app crashes after making optimizations, but they are applied successfully._

Network Tuner helps you tune your network performance by making small optimizations according to your connection type. With this lightweight utility you can increase your LAN and WAN transfer rates and reduce your connection latency (extremely useful for decreasing latency in online games). If you are worried about the changes made to your system then you will be relieved to know that settings changed by Network Tuner are automatically reset to their system defaults upon rebooting your Mac.

- Disables the delayed ACK algorithm to reduce latency.
- Increases the maximum segment size to an optimized value.
- Increases the buffer size for received/sent packets to an optimized value.`,
      },
      {
        title: 'Intel Display Adapter Management Tool',
        url: 'http://uploaded.net/file/oxp1v39d',
        version: '2.0.0',
        description: `__This project is abandoned, meaning that no new versions will come.__

Intel Display Adapter Management Tool is a software written in C++/CLI to help Windows users with integrated Intel GPUs. It lets users to switch between Software Vertex Processing and Hardware Vertex Processing for specific executables which increases frame rates drastically if the machine has a good CPU.`,
      },
    ],
  }),
  head() {
    return {
      title: 'Downloads',
      meta: [
        {
          name: 'Downloads',
          content: 'Close-source freebies.',
        },
      ],
    };
  },
});
</script>
