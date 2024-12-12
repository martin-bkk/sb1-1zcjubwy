import React, { useState } from 'react';
import { Search, X, Tags, Filter } from 'lucide-react';

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  selectedFilters: {
    age: string;
    ethnicity: string;
    bodyType: string;
    hair: string;
    adultDiversity: string;
  };
  setSelectedFilters: (filters: any) => void;
}

const tags = [
  'african', 'amateur', 'amputee', 'athletic', 'balls', 'beard', 'beautiful', 'belly',
  'biceps', 'big', 'bigbelly', 'bigboobs', 'bigbooty', 'bigdildo', 'biglips', 'bigtits',
  'bigtoy', 'bigtoys', 'bimbo', 'bisexual', 'black', 'bondage', 'boobs', 'boy',
  'brazil', 'brazilian', 'breastmilk', 'bulge', 'cfnm', 'chat', 'chinese', 'cock',
  'colombia', 'colombian', 'colombiana', 'college', 'creamy', 'cuck', 'cumface',
  'cumshot', 'cumslut', 'curly', 'deustch', 'dilf', 'dom', 'dominant', 'dominatrix',
  'doublepenetration', 'dp', 'drink', 'edge', 'emo', 'english', 'facial', 'fat',
  'fatpussy', 'fitbody', 'flex', 'fleshlight', 'footfetish', 'foreskin', 'france',
  'freckles', 'fuck', 'fuckface', 'gag', 'gamergirl', 'gangbang', 'germany', 'girlnextdoor',
  'gloves', 'hairybush', 'halloween', 'handjob', 'hardcore', 'hot', 'hotwife', 'hugeboobs',
  'hugecock', 'hung', 'hypnosis', 'india', 'interracial', 'latin', 'leagueoflegends',
  'lesbians', 'lingerie', 'little', 'littletits', 'longlegs', 'longtongue', 'love',
  'lovensecontrol', 'masturbate', 'masturbation', 'milkboobs', 'milkyboobs', 'muscleworship',
  'naked', 'naturalboobs', 'naturalbigboobs', 'naughty', 'nipplepiercing', 'nipples',
  'nora', 'nude', 'nylons', 'ohmibod', 'oil', 'orgasm', 'outside', 'perverted',
  'pierced', 'piercingnipples', 'piercednipples', 'piercings', 'pinkpussy', 'porn',
  'pornstar', 'pov', 'private', 'pump', 'redhair', 'ride', 'saggyboobs', 'schoolgirl',
  'selffuck', 'sensual', 'sex', 'sexmachine', 'sexy', 'shower', 'sissyfication',
  'skinny', 'small', 'smallass', 'smalldick', 'smoker', 'smoking', 'smooth', 'soles',
  'spain', 'spank', 'spanish', 'striptease', 'sub', 'talk', 'tattoos', 'thick',
  'thickcock', 'thin', 'threesome', 'tightpussy', 'tiny', 'tits', 'toes', 'tongue',
  'topless', 'toys', 'transgirl', 'trimmed', 'uk', 'valorant', 'voyeur', 'wet',
  'yoga'
].sort();

const filterOptions = {
  age: [
    { label: '18+', count: 2453 },
    { label: '22+', count: 1876 },
    { label: '30+', count: 945 },
    { label: 'Milf', count: 678 },
    { label: 'Mature', count: 432 }
  ],
  ethnicity: [
    { label: 'Arab', count: 234 },
    { label: 'Asian', count: 1543 },
    { label: 'Ebony', count: 876 },
    { label: 'Indian', count: 432 },
    { label: 'Latina', count: 987 },
    { label: 'Mixed', count: 543 },
    { label: 'White', count: 2345 }
  ],
  bodyType: [
    { label: 'Skinny', count: 876 },
    { label: 'Athletic', count: 1234 },
    { label: 'Medium', count: 2134 },
    { label: 'Curvy', count: 1654 },
    { label: 'BBW', count: 432 }
  ],
  hair: [
    { label: 'Blond', count: 1234 },
    { label: 'Black', count: 987 },
    { label: 'Brunette', count: 1876 },
    { label: 'Redhead', count: 432 },
    { label: 'Colorful', count: 234 }
  ],
  adultDiversity: [
    { label: 'Amateur', count: 1543 },
    { label: 'BDSM', count: 876 },
    { label: 'Gay', count: 654 },
    { label: 'Group Sex', count: 432 },
    { label: 'Kinky', count: 987 },
    { label: 'Lesbian', count: 765 },
    { label: 'LGBTQ+', count: 543 },
    { label: 'MILF', count: 876 },
    { label: 'Teen 18+', count: 1234 }
  ]
};

export default function FilterPopup({
  isOpen,
  onClose,
  selectedTags,
  setSelectedTags,
  selectedFilters,
  setSelectedFilters
}: FilterPopupProps) {
  const [activeTab, setActiveTab] = useState<'tags' | 'filters'>('tags');
  const [tagSearch, setTagSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTags = tags.filter(tag => 
    tag.toLowerCase().includes(tagSearch.toLowerCase())
  );

  const TAGS_PER_PAGE = 30;
  const totalPages = Math.ceil(filteredTags.length / TAGS_PER_PAGE);
  const currentTags = filteredTags.slice(
    (currentPage - 1) * TAGS_PER_PAGE,
    currentPage * TAGS_PER_PAGE
  );

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-purple-900/95 backdrop-blur-sm rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Tags & Filters</h2>
            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Tabs */}
          <div className="flex gap-2 mt-4 md:hidden">
            <button
              onClick={() => setActiveTab('tags')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'tags'
                  ? 'bg-pink-500 text-white'
                  : 'text-white hover:bg-pink-500/20'
              }`}
            >
              <Tags className="w-4 h-4" />
              Tags
            </button>
            <button
              onClick={() => setActiveTab('filters')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'filters'
                  ? 'bg-pink-500 text-white'
                  : 'text-white hover:bg-pink-500/20'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row h-[calc(90vh-100px)]">
          {/* Tags Section */}
          <div className={`flex-1 p-4 overflow-y-auto ${activeTab === 'tags' ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-0 bg-purple-900/95 pb-4 z-10">
              <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
              <div className="relative">
                <input
                  type="text"
                  value={tagSearch}
                  onChange={(e) => {
                    setTagSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search tags..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {currentTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-pink-500 text-white'
                      : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={`page-${page}`}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      currentPage === page
                        ? 'bg-pink-500 text-white'
                        : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filters Section */}
          <div className={`flex-1 border-t md:border-t-0 md:border-l border-white/10 p-4 overflow-y-auto ${activeTab === 'filters' ? 'block' : 'hidden md:block'}`}>
            <h3 className="text-lg font-semibold text-white mb-4 sticky top-0 bg-purple-900/95">Filters</h3>
            <div className="space-y-6">
              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category}>
                  <h4 className="text-white font-medium mb-2 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="space-y-2">
                    {options.map(({ label, count }) => (
                      <button
                        key={label}
                        onClick={() => setSelectedFilters({ 
                          ...selectedFilters, 
                          [category]: selectedFilters[category as keyof typeof selectedFilters] === label ? '' : label 
                        })}
                        className={`flex justify-between w-full px-3 py-2 rounded-lg text-sm ${
                          selectedFilters[category as keyof typeof selectedFilters] === label
                            ? 'bg-pink-500 text-white'
                            : 'bg-purple-800/50 text-white hover:bg-purple-700/50'
                        }`}
                      >
                        <span>{label}</span>
                        <span className="text-xs opacity-60">{count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setSelectedTags([]);
                setSelectedFilters({
                  age: '',
                  ethnicity: '',
                  bodyType: '',
                  hair: '',
                  adultDiversity: ''
                });
              }}
              className="px-6 py-2 text-white hover:text-pink-400 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}