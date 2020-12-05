from app import filter_news_articles
from app import addpages
from app import pages
from app import articles
from app import data
import unittest

class TestBackend(unittest.TestCase):
    
    def test_addpages(self):
        print("Test adding pages of articles:")
        addpages("the-verge")
        self.assertTrue(len(pages) > 0)
        addpages("wired")
        self.assertTrue(len(pages) > 0)
    def test_filter_news_articles(self):
        print("\nTesting tags")
        filter_news_articles()
        self.assertTrue(len(articles[0]["tags"]) > 0)

    

if __name__ == '__main__':
    unittest.main()