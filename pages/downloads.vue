<template>
  <div>
    <v-alert type="info" border="left" class="mb-4">
      <div class="text-body-2">
        These are some old utilities I made years ago. Most are now discontinued, but I'm keeping them here for archival
        purposes.
      </div>
    </v-alert>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>
          <template #actions>
            <v-icon>$expand</v-icon>
          </template>
          <v-row no-gutters align="center">
            <v-col cols="auto">
              <v-icon>{{ item.icon || 'mdi-download' }}</v-icon>
            </v-col>
            <v-col class="ml-2">
              {{ item.title }}
              <v-chip v-if="item.isDiscontinued" x-small class="ml-2" color="grey" text-color="white">
                Discontinued
              </v-chip>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn
            v-if="item.url && !item.isUnavailable"
            color="primary"
            class="ma-2 white--text"
            @click="window.open(item.url)"
          >
            Download {{ item.version }}
            <v-icon right dark>mdi-download</v-icon>
          </v-btn>
          <v-chip v-else-if="item.isUnavailable" color="error" class="ma-2" label>
            <v-icon left>mdi-alert</v-icon>
            Download Unavailable
          </v-chip>
          <editor v-model="item.description" mode="viewer" :outline="false" :render-config="renderConfig" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
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
        icon: 'mdi-archive-outline',
        isDiscontinued: true,
        description: `__This project has been retired.__

Back in the early 2010s, there weren't many good options for running Nintendo DS and GBA games on Mac. I created a Wineskin-wrapped port of [No\\$GBA](http://www.nogba.com/) that was downloaded over 160,000 times.

The Mac emulation scene has come a long way since then. If you're looking to play GBA or DS games on your Mac today, I recommend these modern alternatives:

### For GBA
- **[mGBA](https://mgba.io/)** — Native Apple Silicon support, excellent accuracy, actively maintained
- **[OpenEmu](https://openemu.org/)** — Beautiful unified emulator with support for many systems including GBA

### For Nintendo DS
- **[melonDS](https://melonds.kuribo64.net/)** — Native Mac builds, excellent DS emulation, Wi-Fi support
- **[DeSmuME](https://desmume.org/)** — Long-standing DS emulator with Mac support
- **[OpenEmu](https://openemu.org/)** — Also supports DS via the DeSmuME core`,
      },
      {
        title: 'Network Tuner',
        url: 'http://www.mediafire.com/?q3v9zqbqlgrs95e',
        version: '1.1.0',
        isDiscontinued: true,
        description: `__This project is discontinued and no longer maintained.__

_Does not run on PPC Macs. Requires Mac OS X 10.6 or later. On 10.8 app crashes after making optimizations, but they are applied successfully._

Network Tuner helps you tune your network performance by making small optimizations according to your connection type. With this lightweight utility you can increase your LAN and WAN transfer rates and reduce your connection latency (extremely useful for decreasing latency in online games). If you are worried about the changes made to your system then you will be relieved to know that settings changed by Network Tuner are automatically reset to their system defaults upon rebooting your Mac.

- Disables the delayed ACK algorithm to reduce latency.
- Increases the maximum segment size to an optimized value.
- Increases the buffer size for received/sent packets to an optimized value.`,
      },
      {
        title: 'Intel Display Adapter Management Tool',
        version: '2.0.0',
        isDiscontinued: true,
        isUnavailable: true,
        description: `__This project is discontinued and no longer maintained.__

_Download unavailable due to defunct hosting service._

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
          content: 'Archived utilities and tools.',
        },
      ],
    };
  },
});
</script>
