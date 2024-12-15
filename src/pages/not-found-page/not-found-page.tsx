export default function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Упс! Кажется, страница, которую вы ищете, не найдена.
      </p>
      <p className="not-found-suggestion">
        Возможно, вы неправильно набрали адрес или страница была удалена.
      </p>
      <button className="not-found-button">
        <a href="/">Вернуться на главную</a>
      </button>
    </div>
  );
}
