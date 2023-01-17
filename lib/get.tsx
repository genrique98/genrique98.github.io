import Project from '../interfaces/project'

// type JSONResponse = {
//     data?: any
//     errors?: Array<{message: string}>
//   }

export default async function get(){
    const url = 'https://api.github.com/users/genrique98/repos'
    const response = await fetch(url)
    const data = await response.json()
    let repos: Project[] = []

    data.map((repo: Project) => (
        repos.push(
        {
            "id" : repo.id,
            "full_name": repo.full_name,
            "description": repo.description,
            "html_url": repo.html_url
        })
    ))

    return repos
}
