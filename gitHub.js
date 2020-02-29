class GitHub{
    constructor() {
        this.client_id = 'a87faf3e071a3a6835f9';
        this.client_secret = 'e2ada703aa915e44c63124d062d96fc89bc9ed7a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await 
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await 
        fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile: profile,
            repos: repos
        }
    }
}