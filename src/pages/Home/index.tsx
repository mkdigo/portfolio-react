import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Profile } from './Profile';
import { Game } from './Game';

export function Home() {
  return (
    <main>
      <Header />

      <Game />

      <Skills />

      <Projects />

      <Profile />
    </main>
  );
}
