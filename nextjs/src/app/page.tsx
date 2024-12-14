// No Link tags because of prefetching cash risks

export default async function Home() {
  return (
    <div>
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
      <div>
        <div>
          <a href="/crm/contacts" >CRM - Contacts</a>
        </div>
        <div>
          <a href="/relay-test" >Relay - GraphQL - Test</a>
        </div>
      </div>
    </div>
  )
}
