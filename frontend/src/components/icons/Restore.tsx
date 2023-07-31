export default function Restore({ title }: { title: string; }) {
  return (
    <svg role="img" width="18" height="18" viewBox="0 0 24 24">
      <title>{title}</title>
      <path fill="var(--blue)" d="M18 22H6q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V20q0 .825-.588 1.413T18 22Zm0-2V8.85L13.15 4H6v16h12Zm-6-2.25q1.95 0 3.35-1.4t1.4-3.35q0-1.95-1.4-3.35T12 8.25q-.95 0-1.775.35t-1.475.95v-.8q0-.325-.213-.537T8 8q-.325 0-.537.213t-.213.537v2.5q0 .425.288.713t.712.287h2.5q.325 0 .537-.213t.213-.537q0-.325-.213-.537t-.537-.213H9.7q.425-.45 1.025-.725T12 9.75q1.35 0 2.3.95t.95 2.3q0 1.35-.95 2.3t-2.3.95q-.975 0-1.738-.513T9.075 14.4q-.075-.175-.25-.288T8.45 14q-.475 0-.712.325t-.038.725q.575 1.2 1.725 1.95t2.575.75ZM6 20V4v16Z" />
    </svg>
  );
}