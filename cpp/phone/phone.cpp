#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

bool solution(vector<string> phone_book) {
  map<string, string> _map;
  for (auto _it1 = phone_book.begin(); _it1 != phone_book.end(); _it1++) {
    _map.insert({(*_it1), (*_it1)});
  }
  vector<pair<string, string>> vec(_map.begin(), _map.end());
  for (auto _it1 = vec.begin(); _it1 != (vec.end() - 1); _it1++) {
    if (((*_it1).first).compare((*(_it1 + 1)).first) >= 0)
      continue;

    if ((*(_it1 + 1))
            .first.substr(0, (*_it1).first.length())
            .compare((*_it1).first) == 0)
      return false;
  }
  return true;
}

// std::cout << (*_it1).first << std::endl;

int main() {
  std::cout << "hello world" << std::endl;

  vector<string> sample{"119", "97674223", "1195524421"};
  // vector<string> sample{"12", "123", "1235", "567", "88"};
  // vector<string> sample{"123", "456", "789"};
  bool result = solution(sample);
  std::cout << "result : " << result << std::endl;
  return 0;
}
