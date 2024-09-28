import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Profile } from './Profile';

export function Home() {
  return (
    <main>
      <Header />

      <Skills />

      <Projects />

      <Profile />
    </main>
  );
}
