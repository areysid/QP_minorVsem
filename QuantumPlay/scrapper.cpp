#include <iostream>
#include <string>
#include <curl/curl.h>

// Callback function for storing webpage content
size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* out) {
    out->append((char*)contents, size * nmemb);
    return size * nmemb;
}

// Function to fetch webpage content
std::string fetchWebContent(const std::string& url) {
    CURL* curl = curl_easy_init();
    std::string response;

    if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        curl_easy_perform(curl);
        curl_easy_cleanup(curl);
    }
    return response;
}

// Function to extract text between two substrings
std::string extractData(const std::string& content, const std::string& startTag, const std::string& endTag) {
    size_t start = content.find(startTag);
    if (start == std::string::npos) return "Not Found";
    
    start += startTag.length();
    size_t end = content.find(endTag, start);
    if (end == std::string::npos) return "Not Found";

    return content.substr(start, end - start);
}

int main() {
    std::string url = "https://screenrant.com/tag/apex-legends/";  // Replace with the actual URL
    std::string pageContent = fetchWebContent(url);

    if (!pageContent.empty()) {
        // Extracting Release Date using specific tag patterns
        std::string releaseDate = extractData(pageContent, 
            "<dd><span>", 
            "</span>");

        // Output the extracted Release Date
        std::cout << "Release Date: " << releaseDate << std::endl;
    } else {
        std::cout << "Failed to fetch content!" << std::endl;
    }

    return 0;
}
