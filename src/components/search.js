import React from "react";
import "../style/style.css";
import SearchedRepoList from "./Tables";
import github_api_token from "../apiToken";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      table: [],
      searchTerm: "",
    };

    this.searchGithub = this.searchGithub.bind(this);
  }

  // use search term to get 10 repos, then use names to get tags
  searchGithub() {
    var displayCount = 10;
    var searchTerm = this.state.searchTerm;
    console.log(searchTerm);

    fetch("https://api.github.com/search/repositories?q=" + searchTerm, {
      headers: {
        Authorization: github_api_token
      }
    })
      .then(res => res.json())
      .then(function(response) {
        var records = [];
        for (var i = 0; i < displayCount; i++) {
            console.log(response.items);
          var row = {};
          row["id"] = response.items[i].full_name;
          row["name"] = response.items[i].full_name;
          row["language"] = response.items[i].language;
          row["version"] = "-";
          row["url"] = response.items[i].html_url;
          records.push(row);
        }

        return records;
      })
      .then(   //Get tags from {user} / {repo}
        function(records) {
          records.forEach(function(item, i) {
            fetch("https://api.github.com/repos/" + records[i].name + "/tags", {
              headers: {
                Authorization: github_api_token
              }
            })
              .then(res => res.json())
              .then(function(response) {
                records[i]["version"] = response[0].name;
              })
              .catch(function(err) {
                records[i]["version"] = "-";
              });
          });
          this.setState({ table: records });
          this.forceUpdate();
          return records;
        }.bind(this)
      );
  }

  //Clear table on empty
  update(e) {
      if (e.target.value === '' && this.state.table !== []){
        this.setState({table: []});
      } else{
        this.setState({ searchTerm: e.target.value });
      }
  }

  render() {
    if (this.error) {
      return <div>Error: {this.error.message}</div>;
    } else {
      return (
        <div>
          <input
            type="text"
            className="marketing-input"
            onChange={this.update.bind(this)}
          />
          <button
            onClick={this.searchGithub}
            type="submit"
            className="marketing-button"
          >
            Search
          </button>
          <SearchedRepoList rows={this.state.table} />
        </div>
      );
    }
  }
}

export default Search;
