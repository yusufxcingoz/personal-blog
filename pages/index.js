function HomePage() {
  return (
    <div>
      <div className="site-container">
        <div className={'space-y-4'}>
          <h1 className={'text-2xl font-bold'}>
            Ben Yusuf. <br></br> Üniversite öğrencisi ve Web geliştiriciyim.
          </h1>

          <p>
            Çukurova Üniversitesi Otomotiv Mühendisliği öğrencisiyim. Boş
            zamanlarımda ise Web geliştirme ve sokak fotoğrafçılığı ile
            ilgileniyorum.
          </p>
        </div>
      </div>
      <div className={'max-w-3xl mx-auto mt-10'}>
        <img src="/ben.jpeg" />
      </div>
    </div>
  )
}

export default HomePage
