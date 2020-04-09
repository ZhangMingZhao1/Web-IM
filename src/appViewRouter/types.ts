export interface IRouter {
  path: string;
  exact?: boolean;
  key: string;
  component: React.FC;
}
