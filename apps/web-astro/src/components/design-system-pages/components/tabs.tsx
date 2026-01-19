import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from '@/components/ui/tabs';

import * as styles from '../design.css';

export default function TabsPage() {
  return (
    <>
      <header class={styles.pageHeader}>
        <h1 class={styles.pageTitle}>Tabs</h1>
        <p class={styles.pageDescription}>Tabbed interface for organizing content into sections.</p>
      </header>

      <section class={styles.section}>
        <h2 class={styles.sectionTitle}>Demo</h2>
        <TabsRoot defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Settings</TabsTrigger>
            <TabsTrigger value="tab3">Notifications</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="tab1">
            <div class={styles.card} style={{ 'margin-top': '1rem' }}>
              <p>Account settings and profile information.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div class={styles.card} style={{ 'margin-top': '1rem' }}>
              <p>Application preferences and configuration.</p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div class={styles.card} style={{ 'margin-top': '1rem' }}>
              <p>Notification preferences and alerts.</p>
            </div>
          </TabsContent>
        </TabsRoot>
      </section>
    </>
  );
}
